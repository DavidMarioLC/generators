import toast from "react-hot-toast";

const notify = () =>
  toast("Copiado!", {
    duration: 1000,
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

function useCopy() {
  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    notify();
  }

  return {
    copyCode,
  };
}

export default useCopy;
