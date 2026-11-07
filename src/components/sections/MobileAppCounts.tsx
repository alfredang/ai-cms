import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { HiCheckBadge, HiDevicePhoneMobile } from "react-icons/hi2";
import { ANDROID_LIVE_COUNT, BOTH_STORES_COUNT, IOS_LIVE_COUNT, MOBILE_APPS } from "@/lib/mobile-apps";

/** Live store counts, calculated from the portfolio data so they stay current. */
export function MobileAppCounts() {
  const items = [
    { value: IOS_LIVE_COUNT, label: "iOS apps live", sub: "on the App Store", icon: <FaApple className="w-5 h-5 text-(--color-cyan)" aria-hidden /> },
    { value: ANDROID_LIVE_COUNT, label: "Android apps live", sub: "on Google Play", icon: <FaGooglePlay className="w-5 h-5 text-(--color-green)" aria-hidden /> },
    { value: BOTH_STORES_COUNT, label: "on both stores", sub: "iOS and Android", icon: <HiDevicePhoneMobile className="w-5 h-5 text-(--color-amber)" aria-hidden /> },
    { value: MOBILE_APPS.length, label: "apps in our portfolio", sub: "native, published", icon: <HiCheckBadge className="w-5 h-5 text-(--color-purple-light)" aria-hidden /> },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
      {items.map((i) => (
        <div key={i.label} className="bg-(--color-bg-elevated) px-5 py-4 flex items-center gap-4">
          <div className="font-display text-4xl font-extrabold text-white leading-none">{i.value}</div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              {i.icon}
              {i.label}
            </div>
            <div className="text-xs text-(--color-muted)">{i.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
