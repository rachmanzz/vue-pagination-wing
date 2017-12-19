/* eslint-env jest */
import { mount, shallow } from 'vue-test-utils'
import VuePaginationWing from '../src/VuePaginationWing.vue'

describe('test VuePaginationWing.vue', () => {
  const mockGetWingLeft = jest.fn()
  mockGetWingLeft.mockReturnValue([2, 3])

  const mockGetWingRight = jest.fn()
  mockGetWingRight.mockReturnValue([4, 5])

  const defaultProps = {
    currentPage: 1,
    totalPage: 10,
    wingCount: 2,
    nextText: 'Next',
    prevText: 'Prev',
    customClass: 'pager'
  }

  const customProps = {
    currentPage: 1,
    totalPage: 10,
    wingCount: 3,
    nextText: 'custom next',
    prevText: 'custom prev',
    customClass: 'custom-class'
  }

  it('should mount component', () => {
    const wrapper = mount(VuePaginationWing)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.isVueComponent).toBe(true)
  })

  it('should render correct element', () => {
    const wrapper = mount(VuePaginationWing, {
      attachToDocument: true,
      propsData: defaultProps,
      methods: {
        getWings: mockGetWingLeft
      }
    })
    const ul = wrapper.find('ul')
    expect(ul.is('ul')).toBe(true)
  })

  it('should have correct props', () => {
    const wrapper = mount(VuePaginationWing, {
      propsData: customProps
    })
    expect(wrapper.props().currentPage).toEqual(1)
    expect(wrapper.props().totalPage).toEqual(10)
    expect(wrapper.props().wingCount).toEqual(3)
    expect(wrapper.props().nextText).toEqual('custom next')
    expect(wrapper.props().prevText).toEqual('custom prev')
    expect(wrapper.props().customClass).toEqual('custom-class')
  })

  it('should return correct method getWings()', () => {
    const wrapper = shallow(VuePaginationWing, 
      { 
        propsData: defaultProps,
        methods: {
          getWings: mockGetWingLeft
        }
      }
    )
    expect(wrapper.vm.getWings()).toEqual([2, 3])
    expect(mockGetWingLeft.mock.calls.length).toBe(5)
  })

  it('emit onChangePage for page 1', () => {
    const wrapper = mount(VuePaginationWing, { 
      propsData: defaultProps,
      methods: {
        getWings: mockGetWingLeft
      }
    })

    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.findAll('.pager__page').at(0).trigger('click')
    expect(spy).not.toHaveBeenCalled()
  })

  it('emit onChangePage for page 2', () => {
    const wrapper = mount(VuePaginationWing, { 
      propsData: defaultProps,
      methods: {
        getWings: mockGetWingLeft
      }
    })

    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.findAll('.pager__page').at(1).trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onChangePage', 2)
  })

})