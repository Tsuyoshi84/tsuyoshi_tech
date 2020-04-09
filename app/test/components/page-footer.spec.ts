import { mount, RouterLinkStub } from '@vue/test-utils'
import PageFooter from '@/components/page-footer.vue'

const makeWrapper = () => {
  return mount(PageFooter, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
}

describe('PageFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = makeWrapper()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('generate DOM', () => {
    const wrapper = makeWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
