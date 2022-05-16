import { CheckCircle } from "phosphor-react";
import { CloseButton } from "../../../CloseButton";

interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested: ()=> void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}:FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <CheckCircle weight="fill" className="h-16 w-16 text-green-600" />
        <span className="text-xl mt-2">Thx for your feedback!</span>
        <button className="py-2 px-6 mt-6 bg-zinc-700 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        type="button"
        onClick={onFeedbackRestartRequested}
        >Send another feedback</button>
      </div>
    </>
  );
}
