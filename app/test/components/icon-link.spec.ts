import { mount } from '@vue/test-utils'
import IconLink from '@/components/icon-link.vue'

const makeWrapper = () => {
  return mount(IconLink, {
    propsData: { alt: 'Example', href: 'https://example.com', color: 'red' },
    slots: {
      default: '<div>slot-content</div>',
    },
    stubs: {},
  })
}

describe('IconLink', () => {
  test('is a Vue instance', () => {
    const wrapper = makeWrapper()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('when not hover', () => {
    test('should use default color', (done) => {
      const wrapper = makeWrapper()
      expect(wrapper.html()).toMatchSnapshot()
      done()
    })
  })

  describe('when hover', () => {
    test('should use given color', (done) => {
      const wrapper = makeWrapper()
      wrapper.trigger('mouseover')
      wrapper.vm.$nextTick(() => {
        expect(wrapper.html()).toMatchSnapshot()
        done()
      })
    })
  })
})
