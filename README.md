# DefendUAid

# Git Guide for Team

This guide provides instructions on how to use Git effectively for your team's backend development work.

## Commit Naming Convention

1. **Commit messages should be concise and descriptive**:
   - Start with a verb in the present tense (e.g., "add," "update," "fix", "remove").
   - Use the imperative mood for consistency (e.g., "add feature" instead of "added feature").
   - Use clear and meaningful names that explain the purpose of the commit.

   Example: `add user authentication feature`

2. **Commit messages should be self-contained**:
   - Each commit should represent a logical change or fix.
   - Avoid bundling unrelated changes in a single commit.

3. **Use commit message prefixes**:
   - Use prefixes to indicate the type of commit:
     - `feature:` for new features or functionality
     - `fix:` for bug fixes
     - `refactor:` for code refactoring or restructuring
     - `docs:` for documentation updates
     - `test:` for adding or modifying tests
     - `chore:` for general maintenance or miscellaneous tasks

   Example: `feature: add user authentication feature`

4. **Be consistent**:
   - Follow the same naming convention throughout the project.
   - If working on a specific task or issue, include the task or issue number in the commit message for easier tracking.

   Example: `fix: Issue #123 - Fix user authentication bug`

## Branch Naming Convention

1. **Branch names should be meaningful and descriptive**:
   - Use lowercase letters and hyphens to separate words.
   - Include the related task or issue number, if applicable.

   Example: `feature/user-authentication`, `fix/issue-123`

2. **Use short-lived feature branches**:
   - Create a new branch for each new feature or bug fix.
   - Merge the branch back into the main branch (e.g., `main` or `master`) after completing the work.

3. **Prefixes for branch names**:
   - Use prefixes to indicate the purpose of the branch:
     - `feature/` for new features or functionality
     - `fix/` for bug fixes
     - `hotfix/` for urgent fixes on the main branch
     - `release/` for preparing a new release

   Example: `feature/user-authentication`, `fix/issue-123`

4. **Be consistent**:
   - Follow the same naming convention throughout the project.

