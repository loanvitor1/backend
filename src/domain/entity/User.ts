export class User {
    readonly followers: Follow[] = []

    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) {
        this.validate()
    }

    private isInvalidEmail(email: string): boolean {
        return !/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }

    private isInvalidPassword(password: string): boolean {
        return password.length < 6
    }

    private validate(): void {
        if (!this.id) throw new Error('id is required')
        if (!this.name) throw new Error('name is required')
        if (!this.email) throw new Error('email is required')
        if (!this.password) throw new Error('password is required')
        if (this.isInvalidEmail(this.email)) throw new Error('invalid email')
        if (this.isInvalidPassword(this.password)) throw new Error('invalid password')
    }

    addFollow(id: string, type: FollowType, name: string): void {
        this.followers.push({ id, type, name })
    }
}

type Follow = {
    id: string,
    type: FollowType,
    name: string,
}

type FollowType = 'following' | 'followers'
