import { Toaster } from "sonner";

export default function Toast() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          unstyled: false,
          classNames: {
            error:
              "flex bg-white text-red-800 p-4 rounded shadow-lg border-slate-900",
            success:
              "flex bg-white text-green-900 p-4 rounded shadow-lg border-slate-900",
            loading:
              "flex bg-white text-blue-800 p-4 rounded shadow-lg border-slate-900",
            warning:
              "flex bg-white text-orange-400 p-4 rounded shadow-lg border-slate-900",
            info: "flex bg-white text-blue-300 p-4 rounded shadow-lg border-slate-900",
          },
        }}
      />
    </>
  );
}
