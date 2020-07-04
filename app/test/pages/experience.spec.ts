import { mount } from '@vue/test-utils'
import Experience from '@/pages/experience.vue'

describe('Experience', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Experience)
    expect(wrapper.exists()).toBeTruthy()
  })
})
