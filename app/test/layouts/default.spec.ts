import { shallowMount } from '@vue/test-utils'
import Default from '@/layouts/default.vue'

describe('Default', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Default, {
      stubs: ['nuxt'],
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
