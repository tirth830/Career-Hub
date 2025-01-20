import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg bg-white p-6 shadow-xl">
        <p className="text-2xl font-semibold  text-black">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-gray-600">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-blue-900 "
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}
