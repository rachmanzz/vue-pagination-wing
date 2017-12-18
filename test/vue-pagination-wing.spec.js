/* eslint-env jest */

import { mount } from 'avoriaz'
import VueSelectImage from '../src/VueSelectImage.vue'

describe('VueSelectImage.vue', () => {
  const dataImages = [{
    id: '1',
    src: 'https://unsplash.it/200?random',
    alt: 'Alt Image 1'
  }, {
    id: '2',
    src: 'https://unsplash.it/200?random',
    alt: 'Alt Image 2'
  }]

  it('render correct amount of images', () => {
    const wrapper = mount(VueSelectImage, { propsData: { dataImages }})
    expect(wrapper.find('.VueSelectImage__item').length).toEqual(2)
  })

  it('render with props multiple', () => {
    const wrapper = mount(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    expect(wrapper.find('.is--multiple').length).toEqual(2)
  })

  it('emit onSelectImage event', () => {
    const wrapper = mount(VueSelectImage, { propsData: { dataImages }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.VueSelectImage__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onSelectImage', dataImages[0])
  })

  it('assign singleSelected data', () => {
    const wrapper = mount(VueSelectImage, { propsData: { dataImages }})
    wrapper.find('.VueSelectImage__thumbnail')[0].trigger('click')
    expect(wrapper.data().singleSelected).toEqual(dataImages[0])
  })

  it('emit onSelectMultipleImage event', () => {
    const wrapper = mount(VueSelectImage, { propsData: { dataImages: dataImages, isMultiple: true }})
    const spy = jest.spyOn(wrapper.vm, '$emit')
    wrapper.find('.VueSelectImage__thumbnail')[0].trigger('click')
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('onSelectMultipleImage', [dataImages[0]])
  })
})