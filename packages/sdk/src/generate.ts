import type { EmbedOptions, OpenOptions, Project } from './interfaces'
import { BASE_TEMPLATES, JAVASCRIPT_TEMPLATES, PROJECT_TEMPLATES } from './constants'
import { templatesConfig } from './templates-config'
import { embedUrl, openTarget, openUrl } from './helpers'

function createHiddenInput(name: string, value: string) {
  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = name
  input.value = value
  return input
}

function createProjectForm(project: Project) {
  if (!PROJECT_TEMPLATES.includes(project.template)) {
    const names = PROJECT_TEMPLATES.map(t => `'${t}'`).join(', ')
    console.warn(`Unsupported project.template: must be one of ${names}`)
  }
  project.files = templatesConfig[project.template]
  const template = BASE_TEMPLATS.includes(project.template)
    ? project.template
    : JAVASCRIPT_TEMPLATES.includes(project.template)
      ? 'javascript'
      : 'node'
  const isWebContainers = template === 'node'

  const form = document.createElement('form')
  form.method = 'POST'
  form.setAttribute('style', 'display:none!important;')

  form.appendChild(createHiddenInput('project[title]', project.title))
  form.appendChild(createHiddenInput('project[description]', project.description))
  form.appendChild(createHiddenInput('project[template]', template))

  if (project.dependencies) {
    if (isWebContainers) {
      console.warn(
        'Invalid project.dependencies: dependencies must be provided as a \'package.json\' file when using the \'node\' template.',
      )
    }
    else {
      form.appendChild(
        createHiddenInput('project[dependencies]', JSON.stringify(project.dependencies)),
      )
    }
  }

  if (project.settings)
    form.appendChild(createHiddenInput('project[settings]', JSON.stringify(project.settings)))

  Object.keys(project.files).forEach((path) => {
    if (typeof project.files[path] === 'string')
      form.appendChild(createHiddenInput(`project[files][${path}]`, project.files[path]))
  })

  return form
}

export function createProjectFrameHTML(project: Project, options?: EmbedOptions) {
  const form = createProjectForm(project)
  form.action = embedUrl('/run', options)
  form.id = 'sb'

  const html = `<html><head><title></title></head><body>${form.outerHTML}<script>document.getElementById('${form.id}').submit();</script></body></html>`

  return html
}

export function openNewProject(project: Project, options?: OpenOptions) {
  const form = createProjectForm(project)
  form.action = openUrl('/run', options)
  form.target = openTarget(options)

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}
