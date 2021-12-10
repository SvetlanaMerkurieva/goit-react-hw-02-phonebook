export const Filter = ({ value, onChange }) => {
  <label>
    Найти контакт по имени
    <input type="text" value={value} onChange={onChange} />
  </label>;
};
