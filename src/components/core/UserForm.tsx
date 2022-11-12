import { memo, useMemo } from "react";
import { useUserForm } from "../../hooks/useUserForm";

export const UserForm = memo(() => {
  const user = useMemo(() => ({ id: 1, name: "hoge", age: 27 }), []);
  const { NameInput, AgeInput, submit } = useUserForm(user);

  return (
    <div>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <NameInput />
      </div>
      <div>
        <label htmlFor="age">Enter your age: </label>
        <AgeInput type="number" />
        {/**type を見た目の要件と考えるとこちらで定義する */}
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
});
