import { toast } from 'react-toastify';
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

const fulfilledDefault = (message: string) => {
  toast.success(message);
}

const rejectedDefault = () => {
  toast.error("Something went wrong, data was not copied to clipboard");
}

type CopyArg = {
  copyData: string;
  message: string;
}

const useClipboard = (messageFromHook = 'Data copied') => {
  const copy = ({ copyData, message }: CopyArg) => {
    navigator.clipboard.writeText(copyData).then(
      () => {
        fulfilledDefault(message || messageFromHook);
      },
      () => {
        rejectedDefault();;
      }
    );
  };

  const ClipboardIcon = ({ copyData, message }: CopyArg) => (
    <HiOutlineDocumentDuplicate
      tabIndex={0}
      className="bg-neutral-150 state-focus animate-action inline w-6 rounded-full stroke-neutral-500 p-0.5 pb-1 pl-1 hover:stroke-neutral-800"
      onClick={() => copy({ copyData, message })}
      onKeyDown={(key) => key.code === 'Enter' && copy({ copyData, message })}
    />
  );

  return { ClipboardIcon, copy };
};

export { useClipboard };
