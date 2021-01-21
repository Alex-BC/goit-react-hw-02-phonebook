function ContactList({contacts}) {
    return (
        <ul>{contacts.map(({ id, name, number }) => (
            <li key={id}>
                {/* <span>&hearts;</span> */}
                <p>{name}: {number}</p>
                {/* <span></span> */}
                <button type="button">Delete</button>
            </li>
        ))}</ul>
    )
}
export default ContactList;