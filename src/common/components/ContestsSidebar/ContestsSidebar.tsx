import { useState, useEffect } from "react";
import styles from "./ContestsSidebar.module.css";
import type { Contest, ContestsResponse } from "../../../pages/api/contests";
import { BsTrophy, BsCalendar3, BsClock } from "react-icons/bs";
import Link from "next/link";

export function ContestsSidebar() {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch("/api/contests");

        if (!response.ok) {
          throw new Error("Failed to fetch contests");
        }

        const data: ContestsResponse = await response.json();
        setContests((data.contests || []).slice(0, 5));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);

    return formattedDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const isContestToday = (dateString: string): boolean => {
    const contestDate = new Date(dateString);
    const today = new Date();
    return contestDate.toDateString() === today.toDateString();
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <BsTrophy className={styles.headerIcon} />
          <h3 className={styles.title}>Contests</h3>
        </div>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <BsTrophy className={styles.headerIcon} />
          <h3 className={styles.title}>Contests</h3>
        </div>
        <div className={styles.error}>Failed to load</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BsTrophy className={styles.headerIcon} />
        <h3 className={styles.title}>Contests</h3>
      </div>

      <div className={styles.contestsList}>
        {contests.length === 0 ? (
          <div className={styles.noContests}>No upcoming contests</div>
        ) : (
          contests.map((contest: Contest, index: number) => {
            const isExternal = contest.contestLink.startsWith("http");

            const contestCard = (
              <div
                className={`${styles.contestCard} ${
                  isContestToday(contest.startTime) ? styles.todayContest : ""
                }`}
              >
                <div className={styles.contestHeader}>
                  <span className={styles.platform}>{contest.platform}</span>
                  {isContestToday(contest.startTime) && (
                    <span className={styles.todayBadge}>Today</span>
                  )}
                </div>

                <h4 className={styles.contestName}>{contest.contestName}</h4>

                <div className={styles.contestDetails}>
                  <div className={styles.timeInfo}>
                    <BsCalendar3 className={styles.icon} />
                    <span className={styles.startTime}>
                      {formatDate(contest.startTime)}
                    </span>
                  </div>

                  <div className={styles.durationInfo}>
                    <BsClock className={styles.icon} />
                    <span className={styles.duration}>
                      {contest.contestDuration}
                    </span>
                  </div>
                </div>
              </div>
            );

            return isExternal ? (
              <a
                key={index}
                href={contest.contestLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkWrapper}
              >
                {contestCard}
              </a>
            ) : (
              <Link key={index} href={contest.contestLink} className={styles.linkWrapper}>
                {contestCard}
              </Link>
            );
          })
        )}
      </div>

      {contests.length > 0 && (
        <div className={styles.footer}>
          <Link href="/contests-list" className={styles.viewAllLink}>
            View All Contests →
          </Link>
        </div>
      )}
    </div>
  );
}
