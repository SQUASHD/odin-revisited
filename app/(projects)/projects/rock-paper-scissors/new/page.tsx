import { cloneElement, ReactElement } from "react";

export type SVGProps = React.SVGProps<SVGSVGElement>;
const RockIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M144 0C117.5 0 96 21.5 96 48V96v28.5V176c0 8.8-7.2 16-16 16s-16-7.2-16-16V149.3l-9 7.5C40.4 169 32 187 32 206V244c0 38 16.9 74 46.1 98.3L128 384v96c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V374.7c46.9-19 80-65 80-118.7V176 160 144c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 83.5 329.3 64 304 64c-12.4 0-23.6 4.7-32.1 12.3C270 51.5 249.3 32 224 32c-12.4 0-23.6 4.7-32.1 12.3C190 19.5 169.3 0 144 0z" />
  </svg>
);

const PaperIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z" />
  </svg>
);

const ScissorsIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9l0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z" />
  </svg>
);

const ChoiceButton = ({ icon, label }: PlayerChoice) => (
  <button className="flex aspect-square w-36 flex-col items-center justify-center gap-1 rounded-lg bg-muted hover:bg-muted/70">
    {cloneElement(icon, {
      className: "h-16 aspect-square",
    })}
    {label}
  </button>
);

type PlayerChoice = {
  icon: ReactElement;
  label: string;
};

const playerChoices: PlayerChoice[] = [
  {
    icon: <RockIcon />,
    label: "Rock",
  },
  {
    icon: <PaperIcon />,
    label: "Paper",
  },
  {
    icon: <ScissorsIcon />,
    label: "Scissors",
  },
];

const GAME_CHOICES = ["rock", "paper", "scissors"] as const;
const GAME_RESULTS = ["win", "lose", "draw"] as const;
export default function NewRPS() {
  type GameChoice = "rock" | "paper" | "scissors";
  type GameResult = "WIN" | "LOSE" | "DRAW";

  const getRandomChoice = (): GameChoice => {
    const randomIndex = Math.floor(Math.random() * GAME_CHOICES.length);
    return GAME_CHOICES[randomIndex];
  };

  const getPlayerChoice = () => {};

  const getResult = (
    playerChoice: GameChoice,
    computerChoice: GameChoice
  ): GameResult => {
    if (playerChoice === computerChoice) return "DRAW";
    if (playerChoice === "rock" && computerChoice === "scissors") return "WIN";
    if (playerChoice === "paper" && computerChoice === "rock") return "WIN";
    if (playerChoice === "scissors" && computerChoice === "paper") return "WIN";
    return "LOSE";
  };

  const playRound = () => {};
  const setScoreMessage = (result: GameResult) => {};

  const checkGameOver = () => {};

  const resetGame = () => {};

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center gap-2">
      <h1 className="font-heading text-4xl">Rock Paper Scissors</h1>
      <div className="flex items-center gap-4">
        {playerChoices.map((choice) => (
          <ChoiceButton
            key={choice.label}
            icon={choice.icon}
            label={choice.label}
          />
        ))}
      </div>
    </div>
  );
}