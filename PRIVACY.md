# Privacy Policy

*Last updated: November 20, 2026*

GH Raid Bot ("the bot") is a Discord bot for organising *Throne & Liberty* raid signups. It is run by KeraunosVT ("we"). This policy explains what the bot stores, why, how long it keeps it, and how to have it removed.

The short version: the bot stores only what a raid signup needs (who signed up, as what, for which run, in which server). It never reads your messages, it deletes runs 30 days after they start, and it forgets a server entirely when it's removed from it.

## What the bot stores

**When you sign up for a run, or a lead adds you to one:**
- Your Discord user ID
- Your display name in that server at the time (your server nickname, or your Discord name)
- The role you picked (Tank, DPS or Healer), whether you're in the roster or on the bench, and when you signed up
- If a lead added you, the lead's user ID

**When you post a run:**
- Your Discord user ID, as the run's lead
- What you entered: the raid, its modes and gates, start time, title and notes
- The server, channel and message ID of the post, so the bot can keep it up to date

**When you set your timezone with `/raid timezone`:**
- Your user ID and the timezone you chose. This setting is yours rather than a server's, so it applies wherever you use the bot.

**When a server admin uses `/raid-setup`:**
- The server's ID, and the settings chosen: the raid channel, the poster and manager roles (by ID), the server timezone and the reminder time.

**While you use the plan picker:** your choices are held in the bot's memory, not its database, for up to 15 minutes, until you post, cancel or stop using it.

**Logs:** the bot's host keeps the bot's operational logs. These can include server IDs, user IDs and run IDs when something goes wrong (for example, an error while updating a post). They are used only to find and fix problems.

## What the bot does not collect

- **Message content.** The bot doesn't read messages in your server. It only sees the commands, buttons and menus you use with it.
- **Member lists, presence or voice activity.** It doesn't request those permissions.
- **Email addresses, IP addresses, payment details or anything outside Discord.**

## How it's used

Only to run raid signups:
- Showing who's in each run.
- Moving people up from the bench.
- Sending reminders.
- Sending you a direct message when you're moved up from the bench or added to a run.

Your data is never sold, never used for advertising, and never shared except as described below.

## Who can see it

- **People in the server.** Anyone who can see a run's post can see who signed up, their display names and their roles. Reminder and cancellation messages mention the people signed up.
- **Leads, raid managers and server staff** (Manage Server or Manage Events) can see the full list for a run they manage.
- **Service providers.** The bot runs on a hosting provider and a database provider. They store the data above on our behalf and don't use it for anything else. Discord itself handles all messages the bot sends.
- **Legal requests.** We would disclose data if the law required it.

## How long it's kept

| Data | Kept until |
|---|---|
| A run and everyone's signups for it | 30 days after the run's start time, then deleted automatically |
| A server's settings, runs and signups | The bot is removed from that server, then deleted straight away |
| Your timezone | You clear it with `/raid timezone zone:server` |
| Plan picker choices | 15 minutes after your last click, or a restart of the bot |
| Logs | As long as the hosting provider keeps them |

## Your choices

- **Leave a run:** press **Withdraw** on its post. Your signup for that run is deleted.
- **Clear your timezone:** run `/raid timezone zone:server`.
- **Remove everything for a server:** a server admin can remove the bot, which deletes all of that server's runs, signups and settings.
- **Anything else:** to ask what the bot holds about you, or to have it deleted, open an issue at <https://github.com/KeraunosVT/GH-Raid-Bot/issues>. Don't post personal information in the issue: say what you need, and we'll arrange a private way to verify it's you.

## Children

You must meet Discord's minimum age to use Discord, and so to use the bot. It isn't directed at children, and we don't knowingly collect data from anyone under that age.

## Changes

If this policy changes, the new version will be posted here with a new date. The full history of changes is in this repository's commit log.

## Contact

Questions go to <https://github.com/KeraunosVT/GH-Raid-Bot/issues>.
