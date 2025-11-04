# Testing the Library Locally

This guide explains how to test `landing-page-creator` in another project without publishing it to npm.

## Quick Start: Switch from Published to Local Development

If you already have `landing-page-creator` installed from npm and want to test your local changes:

### ⚠️ Recommended: Using npm pack (Most Reliable)

**npm link often has issues with ESM modules and Windows**. Use this method instead:

```bash
# 1. In your library directory (ui-creator) - build and pack
npm run pack

# 2. In your test project - install the local pack instead
npm uninstall landing-page-creator
npm install ../ui-creator/landing-page-creator-0.5.9.tgz
```

**Note**: The version number in the filename will match your `package.json` version. Adjust the path (`../ui-creator/`) based on your actual folder structure.

---

## 🔄 Development Workflow (After Initial Setup)

### ⚡ Option 1: yalc (RECOMMENDED - Automatic Updates!)

**yalc is a better alternative to npm link** that automatically pushes changes to your test project. Works great with ESM and Windows!

**Initial Setup:**
```bash
# 1. Install yalc globally (one-time setup)
npm install -g yalc

# 2. In your LIBRARY directory (ui-creator) - publish to yalc store
npm run yalc:publish

# 3. In your TEST PROJECT - add from yalc
yalc add landing-page-creator
```

**During Development (Automatic Updates!):**
```bash
# In your LIBRARY directory - this watches for changes and auto-pushes!
npm run yalc:watch
```

This script will:
1. Start rollup in watch mode (auto-rebuilds on file changes)
2. Watch the `dist` folder for changes
3. Automatically run `yalc push` whenever the build completes
4. Your test project will receive updates automatically!

**Result:** Every time you save a file:
- ✅ Automatically rebuilds
- ✅ Automatically pushes to yalc
- ✅ Your test project's dev server will hot-reload (or refresh to see changes)

**To stop watching:** Press `Ctrl+C` in the watch terminal

**When done developing:**
```bash
# In your test project - remove yalc version
yalc remove landing-page-creator

# Install published version again
npm install landing-page-creator
```

---

### Option 2: Manual npm pack (What you're doing now)

**Every time you make changes to your library:**

```bash
# Step 1: In your LIBRARY directory (ui-creator)
npm run pack

# Step 2: In your TEST PROJECT directory
npm install ../ui-creator/landing-page-creator-0.5.9.tgz --force

# Step 3: Restart your dev server (if running)
```

**That's it!** The `--force` flag tells npm to overwrite the existing installation with your new changes.

**Tip**: Keep both terminal windows open - one for the library, one for your test project, to make this workflow faster.

### Alternative: Using npm link (Can Have Issues)

If you want to try npm link (may not work with ESM/Windows):

```bash
# 1. In your library directory - ensure dist exists and link
npm run build  # Make sure this succeeds first!
npm link

# 2. In your test project - uninstall and link
npm uninstall landing-page-creator
npm link landing-page-creator

# If you get "Module not found" errors, use npm pack instead
```

## Method 1: npm pack (Recommended)

This method creates a tarball (`.tgz` file) that can be installed like a regular package.

### Step 1: Build and pack the library
```bash
npm run pack
```

This will:
- Build the library (`npm run build`)
- Create a `.tgz` file in the root directory (e.g., `landing-page-creator-0.5.9.tgz`)

### Step 2: Install in your test project
In your test project directory, install the tarball:

```bash
npm install /path/to/landing-page-creator/landing-page-creator-0.5.9.tgz
```

Or if you're in the library directory:
```bash
npm install ./landing-page-creator-0.5.9.tgz
```

Or from a relative path:
```bash
npm install ../ui-creator/landing-page-creator-0.5.9.tgz
```

### Step 3: Use in your project
```tsx
import { Card, CustomButton } from 'landing-page-creator';
import 'landing-page-creator/styles.css';
```

### Step 4: Update when you make changes

**After making any changes to your library code, CSS, or components:**

```bash
# 1. In your library directory (ui-creator) - rebuild and pack
npm run pack

# 2. In your test project - reinstall with --force flag
npm install ../ui-creator/landing-page-creator-0.5.9.tgz --force

# 3. Restart your dev server (if it's running)
```

**Quick workflow:**
1. Make changes → Save files
2. Run `npm run pack` in library
3. Run `npm install ../ui-creator/landing-page-creator-0.5.9.tgz --force` in test project
4. Changes should appear (may need to refresh/reload)

---

## Method 2: npm link (Switching from Published to Local)

This method creates a symlink between your library and test project. Use this when you already have the library installed from npm and want to switch to local development.

### Step 1: Uninstall the published version (in your test project)
```bash
npm uninstall landing-page-creator
```

### Step 2: Link the library from source
In your library directory (ui-creator):
```bash
npm run link
```

This builds the library and creates a global symlink.

### Step 3: Link in your test project
In your test project directory:
```bash
npm link landing-page-creator
```

This replaces the npm-installed version with a symlink to your local development version.

### Step 4: Rebuild when you make changes
After making changes to the library, rebuild:
```bash
npm run build
```

The changes should reflect immediately in your test project (may require a dev server restart).

### Step 5: Switch back to published version (when ready)
In your test project:
```bash
npm unlink landing-page-creator
npm install landing-page-creator
```

In the library directory (optional, to clean up):
```bash
npm unlink
```

**Note**: `npm link` can sometimes have issues with peer dependencies and module resolution. If you encounter problems, use Method 1 (`npm pack`) instead.

---

## Method 3: Watch Mode (Best for Development)

For active development, use watch mode to automatically rebuild on changes.

### Step 1: Start watch mode
In your library directory:
```bash
npm run watch
```

This will watch for changes and rebuild automatically.

### Step 2: Use npm link or pack
Then use either Method 1 or Method 2 above. With watch mode running, your test project will get updates automatically.

---

## Troubleshooting

### Issue: "Module not found: Can't resolve 'landing-page-creator'" (npm link)

This is a **common problem with npm link**, especially on Windows and with ESM modules. Here's how to fix it:

**Solution 1: Use npm pack instead (RECOMMENDED)**
```bash
# In library directory
npm run pack

# In test project
npm uninstall landing-page-creator
npm install ../ui-creator/landing-page-creator-0.5.9.tgz
```

**Solution 2: If you must use npm link, try these steps:**
```bash
# 1. In library directory - verify build succeeded
npm run build
# Check that dist/index.js and dist/index.esm.js exist

# 2. Clean unlink first (if previously linked)
npm unlink  # in library directory
npm unlink landing-page-creator  # in test project

# 3. Remove from node_modules
# In test project:
rm -rf node_modules/landing-page-creator  # Linux/Mac
# OR
rmdir /s node_modules\landing-page-creator  # Windows CMD
# OR manually delete the folder

# 4. Relink
npm link  # in library directory
npm link landing-page-creator  # in test project

# 5. Restart your dev server completely
```

**Solution 3: Check Windows path issues**
If on Windows, npm link might have path resolution issues. Use npm pack instead or try:
```bash
# Use absolute path in npm pack
npm install H:\Web Development\Coldwell Banker\landing-pages\ui-creator\landing-page-creator-0.5.9.tgz
```

### Issue: "Cannot find module" or "Module not found" (npm pack)
- Make sure you've run `npm run build` first
- Check that the `dist` folder exists and contains the built files
- Verify the path to the `.tgz` file is correct (relative or absolute)
- Try using an absolute path instead of relative
- Make sure the version number in the filename matches your `package.json` version

### Issue: Peer dependency warnings
- Make sure React and React-DOM versions match in both projects
- The library requires React 19.2.0, so your test project should use compatible versions

### Issue: Changes not reflecting
- Rebuild the library after changes (`npm run build`)
- If using `npm pack`, re-run `npm run pack` and reinstall the new `.tgz` file with `--force`
- If using `npm link`, restart your dev server
- Clear your test project's node_modules and reinstall if needed

### Issue: CSS not loading
- Make sure you're importing the styles: `import 'landing-page-creator/styles.css'`
- Check that `dist/styles.css` exists after building
- After reinstalling, clear your bundler cache and restart dev server

---

## Quick Start Example

```bash
# In library directory
npm run pack

# In your test project
npm install ../ui-creator/landing-page-creator-0.5.9.tgz

# Use in your code
import { Card } from 'landing-page-creator';
import 'landing-page-creator/styles.css';
```

