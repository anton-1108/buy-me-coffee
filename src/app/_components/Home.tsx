"use client";

import { useState } from "react";
import {
  Coffee,
  ChevronDown,
  ExternalLink,
  LinkIcon,
  Heart,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Transaction = {
  id: string;
  name: string;
  username: string;
  url: string;
  message: string;
  amount: number;
  time: string;
  avatar?: string;
  isGuest?: boolean;
};

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState<"30" | "90" | "all">("30");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [amountFilters, setAmountFilters] = useState<Record<string, boolean>>({
    $1: true,
    $2: false,
    $5: false,
    $10: false,
  });

  // Toggle between showing transactions and empty state
  const [hasTransactions, setHasTransactions] = useState(true);

  const toggleTransactions = () => {
    setHasTransactions(!hasTransactions);
  };

  const transactions: Transaction[] = [
    {
      id: "1",
      name: "Guest",
      username: "instagram.com/welesley",
      url: "instagram.com/welesley",
      message:
        "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment",
      amount: 1,
      time: "10 hours ago",
      isGuest: true,
    },
    {
      id: "2",
      name: "John Doe",
      username: "buymeacoffee.com/bdsadas",
      url: "buymeacoffee.com/bdsadas",
      message: "Thank you for being so awesome everyday!",
      amount: 10,
      time: "10 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Radicals",
      username: "buymeacoffee.com/gkfgrew",
      url: "buymeacoffee.com/gkfgrew",
      message: "",
      amount: 2,
      time: "10 hours ago",
      isGuest: true,
    },
    {
      id: "4",
      name: "Guest",
      username: "facebook.com/penelopeb",
      url: "facebook.com/penelopeb",
      message: "",
      amount: 5,
      time: "10 hours ago",
      isGuest: true,
    },
    {
      id: "5",
      name: "Fan1",
      username: "buymeacoffee.com/supporterone",
      url: "buymeacoffee.com/supporterone",
      message:
        "Thank you for being so awesome everyday! You always manage to brighten up my day when I'm feeling down. Although $1 isn't that much money it's all I can contribute at the moment. When I become successful I will be sure to buy you...",
      amount: 10,
      time: "10 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      name: "Guest",
      username: "instagram.com/welesley",
      url: "instagram.com/welesley",
      message: "",
      amount: 1,
      time: "10 hours ago",
      isGuest: true,
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    // If no amount filters are selected, show all
    if (!Object.values(amountFilters).some(Boolean)) return true;

    // Otherwise, only show transactions that match selected amount filters
    return amountFilters[`$${transaction.amount}`];
  });

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5" />
            <span className="font-medium">Buy Me Coffee</span>
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-2"
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            >
              <Image
                src="/images/avatar.png"
                alt="Jake"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>Jake</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-md shadow-sm z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-100 min-h-[calc(100vh-64px)]">
          <nav className="py-4">
            <Link href="#" className="block px-6 py-2 bg-gray-50 font-medium">
              Home
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              View page
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50"
            >
              Account settings
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            {/* Profile section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/avatar.png"
                    alt="Jake"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-medium">Jake</h2>
                    <p className="text-gray-500 text-sm">
                      buymeacoffee.com/baconpancakes1
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md text-sm">
                  <LinkIcon className="h-4 w-4" />
                  Share page link
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Earnings</h3>
                  <div className="relative">
                    <button
                      className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-1 text-sm"
                      onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    >
                      Last{" "}
                      {timeFilter === "all" ? "all time" : `${timeFilter} days`}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {isTimeDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-sm z-10">
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center text-sm"
                          onClick={() => {
                            setTimeFilter("30");
                            setIsTimeDropdownOpen(false);
                          }}
                        >
                          Last 30 days
                          {timeFilter === "30" && (
                            <Check className="h-4 w-4 ml-auto" />
                          )}
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center text-sm"
                          onClick={() => {
                            setTimeFilter("90");
                            setIsTimeDropdownOpen(false);
                          }}
                        >
                          Last 90 days
                          {timeFilter === "90" && (
                            <Check className="h-4 w-4 ml-auto" />
                          )}
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center text-sm"
                          onClick={() => {
                            setTimeFilter("all");
                            setIsTimeDropdownOpen(false);
                          }}
                        >
                          All time
                          {timeFilter === "all" && (
                            <Check className="h-4 w-4 ml-auto" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <h1 className="text-4xl font-bold">$450</h1>
              </div>
            </div>

            {/* Transactions section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Recent transactions</h3>
                <div className="relative">
                  <button
                    className="flex items-center gap-2 text-sm"
                    onClick={() =>
                      setIsAmountDropdownOpen(!isAmountDropdownOpen)
                    }
                  >
                    Amount
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isAmountDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isAmountDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-sm z-10 p-2">
                      <label className="flex items-center gap-2 py-1 text-sm">
                        <input
                          type="checkbox"
                          checked={amountFilters["$1"]}
                          onChange={() =>
                            setAmountFilters({
                              ...amountFilters,
                              $1: !amountFilters["$1"],
                            })
                          }
                          className="rounded border-gray-300"
                        />
                        $1
                      </label>
                      <label className="flex items-center gap-2 py-1 text-sm">
                        <input
                          type="checkbox"
                          checked={amountFilters["$2"]}
                          onChange={() =>
                            setAmountFilters({
                              ...amountFilters,
                              $2: !amountFilters["$2"],
                            })
                          }
                          className="rounded border-gray-300"
                        />
                        $2
                      </label>
                      <label className="flex items-center gap-2 py-1 text-sm">
                        <input
                          type="checkbox"
                          checked={amountFilters["$5"]}
                          onChange={() =>
                            setAmountFilters({
                              ...amountFilters,
                              $5: !amountFilters["$5"],
                            })
                          }
                          className="rounded border-gray-300"
                        />
                        $5
                      </label>
                      <label className="flex items-center gap-2 py-1 text-sm">
                        <input
                          type="checkbox"
                          checked={amountFilters["$10"]}
                          onChange={() =>
                            setAmountFilters({
                              ...amountFilters,
                              $10: !amountFilters["$10"],
                            })
                          }
                          className="rounded border-gray-300"
                        />
                        $10
                      </label>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={toggleTransactions}
                className="mb-4 text-sm text-blue-500 underline"
              >
                Toggle between transactions and empty state
              </button>

              {hasTransactions ? (
                <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                  {filteredTransactions.map((transaction) => (
                    <div key={transaction.id} className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {transaction.isGuest ? (
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                              CN
                            </div>
                          ) : (
                            <Image
                              src={
                                transaction.avatar ||
                                "/placeholder.svg?height=40&width=40"
                              }
                              alt={transaction.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          )}
                          <div>
                            <p className="font-medium">{transaction.name}</p>
                            <p className="text-sm text-gray-500">
                              {transaction.url}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-600">
                            + ${transaction.amount}
                          </p>
                          <p className="text-sm text-gray-500">
                            {transaction.time}
                          </p>
                        </div>
                      </div>
                      {transaction.message && (
                        <p className="text-gray-700 ml-[52px] text-sm">
                          {transaction.message}
                        </p>
                      )}
                      {transaction.message &&
                        transaction.message.length > 100 && (
                          <button className="text-sm text-blue-500 ml-[52px] mt-1">
                            Show more
                          </button>
                        )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-blue-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    You don't have any supporters yet
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Share your page with your audience to get started.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
