import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {
      stubs: ['top-menu-button'],
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
