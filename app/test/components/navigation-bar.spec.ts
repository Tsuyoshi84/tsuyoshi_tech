import { mount, RouterLinkStub } from '@vue/test-utils'
import NavigationBar from '@/components/navigation-bar.vue'

describe('NavigationBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavigationBar, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
