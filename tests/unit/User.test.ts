import { randomUUID } from 'crypto'
import { User } from '../../src/domain/entity/User'

test('Not should create a new user with id is required', () => {
    expect(() => new User(
        '',
        'Jhon Doe',
        'jhon.doegmail.com',
        '123456'
    )).toThrowError('id is required')
})

test('Not should create a new user with name is required', () => {
    expect(() => new User(
        randomUUID(),
        '',
        'jhon.doegmail.com',
        '123456'
    )).toThrowError('name is required')
})

test('Not should create a new user with email is required', () => {
    expect(() => new User(
        randomUUID(),
        'Jhon Doe',
        '',
        '123456'
    )).toThrowError('email is required')
})

test('Not should create a new user with password is required', () => {
    expect(() => new User(
        randomUUID(),
        'Jhon Doe',
        'jhon.doe@gmail.com',
        ''
    )).toThrowError('password is required')
})

test('Not should create a new user with invalid email', () => {
    expect(() => new User(
        randomUUID(),
        'Jhon Doe',
        'jhon.doegmail.com',
        '123456'
    )).toThrowError('invalid email')
})

test('Not should create a new user with invalid email', () => {
    expect(() => new User(
        randomUUID(),
        'Jhon Doe',
        'jhon.doe@gmail.com',
        '12345'
    )).toThrowError('invalid password')
})

test('Should create a new user with one following', () => {
    const user = new User(
        randomUUID(),
        'Jhon Doe',
        'jhon.doe@gmail.com',
        '123456'
    )
    user.addFollow(randomUUID(), 'following', 'Jhon')
    expect(user.followers.length).toBe(1)
    expect(user.followers[0].name).toBe('Jhon')
})

test('Should create a new user with one followers', () => {
    const user = new User(
        randomUUID(),
        'Jhon Doe',
        'jhon.doe@gmail.com',
        '123456'
    )
    user.addFollow(randomUUID(), 'followers', 'Jhon')
    expect(user.followers.length).toBe(1)
    expect(user.followers[0].name).toBe('Jhon')
})
