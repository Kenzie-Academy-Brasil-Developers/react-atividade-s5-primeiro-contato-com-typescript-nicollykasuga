interface CardProps {
  name: string;
  age: string;
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => (
  <div>
    <h3>
      Olá, <span>{name}!</span>
    </h3>
    <p>
      Você tem <span>{age}</span> anos, e seu hobby é <span>{hobby}!</span>
    </p>
  </div>
);
