function NameForm() {
    return (
        <label htmlFor="name">
            Для кого выбираем подарок?
            <input type="text" name="name" id="name" placeholder="введите имя"/>
        </label>
    );
}

export { NameForm };
