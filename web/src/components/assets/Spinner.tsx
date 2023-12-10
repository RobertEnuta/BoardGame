export const Spinner = (props: { size?: number }) => {
  return (
    <div aria-label="Loading..." role="status">
      <svg
        width={props.size ?? 16}
        height={props.size ?? 16}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
      >
        <path
          className="fill-slate-200 stroke-black "
          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        ></path>
        <path
          className="fill-white stroke-slate-200"
          d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
        ></path>
      </svg>
    </div>
  );
};

export const PageLoading = (props: { size?: number }) => {
  return (
    <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
      <Spinner size={props.size} />
    </div>
  );
};
