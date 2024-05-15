interface previewSectionProp {
  previewContent: string;
}

export default function PreviewSection({ previewContent }: previewSectionProp) {
  return (
    <>
      <div className="mt-8 w-full pl-8 flex justify-start items-center text-[26.75px] font-bold leading-5 tracking-[-0.07px]">
        Previews
      </div>

      <div className="mt-6 px-8 h-fit leading-[14.17px] text-[11.14px] tracking-[-0.03px] font-normal">
        {previewContent === ''
          ? 'There is no preview information!'
          : previewContent}
      </div>
    </>
  );
}
