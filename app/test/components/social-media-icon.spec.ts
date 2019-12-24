import { mount } from '@vue/test-utils'
import SocialMediaIcon from '@/components/social-media-icon.vue'

const getComponent = () => {
  return mount(SocialMediaIcon, {
    propsData: { href: 'https://example.com', color: 'red' },
    slots: {
      default: '<div>slot-content</div>'
    },
    stubs: {}
  })
}

describe('SocialMediaIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = getComponent()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('when not hover', () => {
    test('should use default color', done => {
      const wrapper = getComponent()
      expect(wrapper.html()).toMatchSnapshot()
      done()
    })
  })

  describe('when hover', () => {
    test('should use given color', done => {
      const wrapper = getComponent()
      wrapper.trigger('mouseover')
      wrapper.vm.$nextTick(() => {
        expect(wrapper.html()).toMatchSnapshot()
        done()
      })
    })
  })
})
