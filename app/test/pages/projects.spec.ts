import { mount } from '@vue/test-utils'
import Projects from '@/pages/projects.vue'

describe('Projects', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Projects)
    expect(wrapper.exists()).toBeTruthy()
  })
})
