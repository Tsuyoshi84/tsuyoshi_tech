import { mount } from '@vue/test-utils'
import Skills from '@/pages/skills.vue'

describe('Skills', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Skills)
    expect(wrapper.exists()).toBeTruthy()
  })
})
