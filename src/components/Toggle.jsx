export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggleContainer">
            <input type="checkbox" id="toggleInput" className="toggle"
            onChange={handleChange} checked={isChecked} />
            <label htmlFor="toggleInput">Dark Mode</label>
        </div>
    );
};