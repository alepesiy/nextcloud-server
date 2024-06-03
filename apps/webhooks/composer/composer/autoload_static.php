<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitWebhooks
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Webhooks\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Webhooks\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Webhooks\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Webhooks\\BackgroundJobs\\WebhookCall' => __DIR__ . '/..' . '/../lib/BackgroundJobs/WebhookCall.php',
        'OCA\\Webhooks\\Command\\Index' => __DIR__ . '/..' . '/../lib/Command/Index.php',
        'OCA\\Webhooks\\Controller\\WebhooksController' => __DIR__ . '/..' . '/../lib/Controller/WebhooksController.php',
        'OCA\\Webhooks\\Db\\AuthMethod' => __DIR__ . '/..' . '/../lib/Db/AuthMethod.php',
        'OCA\\Webhooks\\Db\\WebhookListener' => __DIR__ . '/..' . '/../lib/Db/WebhookListener.php',
        'OCA\\Webhooks\\Db\\WebhookListenerMapper' => __DIR__ . '/..' . '/../lib/Db/WebhookListenerMapper.php',
        'OCA\\Webhooks\\Listener\\WebhooksEventListener' => __DIR__ . '/..' . '/../lib/Listener/WebhooksEventListener.php',
        'OCA\\Webhooks\\Migration\\Version1000Date20240527153425' => __DIR__ . '/..' . '/../lib/Migration/Version1000Date20240527153425.php',
        'OCA\\Webhooks\\ResponseDefinitions' => __DIR__ . '/..' . '/../lib/ResponseDefinitions.php',
        'OCA\\Webhooks\\Service\\PHPMongoQuery' => __DIR__ . '/..' . '/../lib/Service/PHPMongoQuery.php',
        'OCA\\Webhooks\\Settings\\Admin' => __DIR__ . '/..' . '/../lib/Settings/Admin.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitWebhooks::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitWebhooks::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitWebhooks::$classMap;

        }, null, ClassLoader::class);
    }
}
