const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.exkoi.dev.TaskManager.dev";
  }

  if (IS_PREVIEW) {
    return "com.exkoi.dev.TaskManager.preview";
  }

  return "com.exkoi.dev.TaskManager";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Task Manager (Dev)";
  }

  if (IS_PREVIEW) {
    return "Task Manager (Preview)";
  }

  return "Task Manager: List Your Need";
};

export default {
  expo: {
    name: getAppName(),
    slug: "TaskManager",
    version: "1.1.0-stable",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "fe2982f0-e3d7-4127-a203-bff07f825f65",
      },
    },
    owner: "exkoi.dev",
    updates: {
      url: "https://u.expo.dev/fe2982f0-e3d7-4127-a203-bff07f825f65",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
