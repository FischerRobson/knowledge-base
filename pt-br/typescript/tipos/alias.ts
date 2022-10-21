type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario2: Funcionario = {
  supervisores: ["amigo", "larapio"],
  baterPonto(horario: number): string {
    if (horario > 8) return "atrasado";
    else return "tudo ok";
  },
};
