export function newUser(formData) {
    return {
        name: formData.get('name'),
        password: formData.get('password')
    };
}