SELECT contests.contest_id,
        contests.hacker_id, 
        contests.name, 
        SUM(total_submissions), 
        SUM(total_accepted_submissions), 
        SUM(total_views),
        SUM(total_unique_views)
FROM contests 
JOIN colleges ON contests.contest_id = colleges.contest_id 
JOIN challenges ON colleges.college_id = challenges.college_id 
LEFT JOIN (SELECT 
                challenge_id,
                SUM(total_views) AS total_views,
                SUM(total_unique_views) AS total_unique_views
            FROM view_stats
            GROUP BY challenge_id) T1
ON challenges.challenge_id = T1.challenge_id 
LEFT JOIN (SELECT
                challenge_id,
                SUM(total_submissions) AS total_submissions,
                SUM(total_accepted_submissions) AS total_accepted_submissions
            FROM submission_stats
            GROUP BY challenge_id) T2
ON challenges.challenge_id = T2.challenge_id
GROUP BY contests.contest_id, contests.hacker_id, contests.name
HAVING SUM(total_submissions)!=0
OR SUM(total_accepted_submissions)!=0
OR SUM(total_views)!=0
OR SUM(total_unique_views)!=0
ORDER BY contest_id;