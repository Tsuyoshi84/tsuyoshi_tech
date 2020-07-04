import { mount, RouterLinkStub } from '@vue/test-utils'
import PageHeader from '@/components/page-header.vue'

const makeWrapper = () => {
  return mount(PageHeader, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })
}

describe('PageHeader', () => {
  test('generate DOM', () => {
    const wrapper = makeWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
