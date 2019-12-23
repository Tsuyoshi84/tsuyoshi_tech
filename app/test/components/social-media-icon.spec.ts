import { mount, RouterLinkStub } from '@vue/test-utils'
import SocialMediaIcon from '@/components/social-media-icon.vue'

describe('SocialMediaIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SocialMediaIcon, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
