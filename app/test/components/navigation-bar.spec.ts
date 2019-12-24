import { mount, RouterLinkStub } from '@vue/test-utils'
import NavigationBar from '@/components/navigation-bar.vue'

const makeWrapper = () => {
  return mount(NavigationBar, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('NavigationBar', () => {
  test('is a Vue instance', () => {
    const wrapper = makeWrapper()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('generate DOM', () => {
    const wrapper = makeWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
