import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const fullcode = useSelector(
    (state: RootState) => state.CompilerSlice.fullcode
  );
  const combinedCode = `
    <html><style> ${fullcode.css}</style><body>${fullcode.html}</body><script>${fullcode.javascript}</script></html>`;

    const iframecode = `data:text/html;charset=utf-8,${encodeURIComponent(combinedCode)}`
  return (
    <div className="bg-white border-2 border-red-500 h-[calc(100dvh-60px)]">
      <iframe className="w-full h-full" src={iframecode} />
    </div>
  );
}
