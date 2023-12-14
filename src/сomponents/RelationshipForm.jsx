function RelationshipForm() {
    return (
        <label htmlFor="relationship">
            Кто этот человек вам?
            <input type="text" name="relationship" id="relationship" placeholder="брат, сестра, друг и т.д."/>
        </label>
    );
}

export { RelationshipForm };
