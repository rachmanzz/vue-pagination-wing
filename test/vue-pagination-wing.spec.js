/* eslint-env jest */
import { mount } from 'vue-test-utils'
import VuePaginationWing from '../src/VuePaginationWing.vue'

describe('test VuePaginationWing.vue', () => {
  it('should have correct props', () => {
    const wrapper = mount(VuePaginationWing, {
      propsData: {
        currentPage: 1,
        totalPage: 10,
        wingCount: 3,
        nextText: 'custom next',
        prevText: 'custom prev',
        customClass: 'custom-class'
      }
    })
    expect(wrapper.props().currentPage).toBe(1)
    expect(wrapper.props().totalPage).toBe(10)
    expect(wrapper.props().wingCount).toBe(3)
    expect(wrapper.props().nextText).toBe('custom next')
    expect(wrapper.props().prevText).toBe('custom prev')
    expect(wrapper.props().customClass).toBe('custom-class')
  })
})