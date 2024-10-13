import config from "@/config";

const AppFooter = () => {
  const yearEst = 2024;
  const yearNow = new Date().getFullYear();
  const yearInterval = yearNow === yearEst ? yearNow : `${yearEst}–${yearNow}`;
  const appName = config.app.name;

  return (
    <footer>
      <div className="container-fluid">
        <div className={"text-end text-sm py-1 text-muted"}>
          &copy; {yearInterval} {appName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
