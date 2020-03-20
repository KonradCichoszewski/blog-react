const TITLE_CHANGE = 'TITLE_CHANGE'
const CONTENT_CHANGE = 'CONTENT_CHANGE'
const SUBMIT = 'SUBMIT'

export function titleChange(value) {
    console.log(value);
    return{
        type: TITLE_CHANGE,
        value: value
    }
}

export function contentChange(value) {
    console.log(value);
    return{
        type: CONTENT_CHANGE,
        value: value
    }
}

export function handleSubmit( value ) {
    return{
        type: SUBMIT,
        title: value.title,
        content: value.content
    }
}