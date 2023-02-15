import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first parameter', () => {
    expect(classNames('singleClass')).toBe('singleClass')
  })

  test('with additional classes', () => {
    const expected = 'baseClass class1 class2'

    expect(classNames('baseClass', ['class1', 'class2'])).toBe(expected)
  })

  test('with mods true classes', () => {
    const expected = 'baseClass class1 class2 hovered highlighted'

    expect(classNames(
      'baseClass',
      ['class1', 'class2'],
      { hovered: true, highlighted: true }
    )).toBe(expected)
  })

  test('with mods false class', () => {
    const expected = 'baseClass hovered'

    expect(classNames(
      'baseClass',
      [],
      { hovered: true, highlighted: false }
    )).toBe(expected)
  })
})
