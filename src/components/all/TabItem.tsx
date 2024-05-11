'use client';

import { useRouter } from 'next/navigation';

interface TabItemProps {
  name: string;
  pathName: string;
  currentPath: string | null;
  ActiveIcon: any;
  InactiveIcon: any;
}

export default function TabItem({
  name,
  pathName,
  currentPath,
  ActiveIcon,
  InactiveIcon,
}: TabItemProps) {
  const router = useRouter();
  const isActive = currentPath === pathName;

  return (
    <div className="tabBarItem" onClick={() => router.push(pathName)}>
      {isActive ? (
        <ActiveIcon className="tabBarItemSVG" />
      ) : (
        <InactiveIcon className="tabBarItemSVG" />
      )}
      <span
        className={`tabBarItemSpan ${
          isActive ? 'text-white' : 'text-tabBarGray'
        }`}
      >
        {name}
      </span>
    </div>
  );
}
