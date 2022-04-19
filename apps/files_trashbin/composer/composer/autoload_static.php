<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitFiles_Trashbin
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Files_Trashbin\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Files_Trashbin\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Files_Trashbin\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Files_Trashbin\\BackgroundJob\\ExpireTrash' => __DIR__ . '/..' . '/../lib/BackgroundJob/ExpireTrash.php',
        'OCA\\Files_Trashbin\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'OCA\\Files_Trashbin\\Command\\CleanUp' => __DIR__ . '/..' . '/../lib/Command/CleanUp.php',
        'OCA\\Files_Trashbin\\Command\\Expire' => __DIR__ . '/..' . '/../lib/Command/Expire.php',
        'OCA\\Files_Trashbin\\Command\\ExpireTrash' => __DIR__ . '/..' . '/../lib/Command/ExpireTrash.php',
        'OCA\\Files_Trashbin\\Command\\RestoreAllFiles' => __DIR__ . '/..' . '/../lib/Command/RestoreAllFiles.php',
        'OCA\\Files_Trashbin\\Command\\Size' => __DIR__ . '/..' . '/../lib/Command/Size.php',
        'OCA\\Files_Trashbin\\Controller\\PreviewController' => __DIR__ . '/..' . '/../lib/Controller/PreviewController.php',
        'OCA\\Files_Trashbin\\Events\\MoveToTrashEvent' => __DIR__ . '/..' . '/../lib/Events/MoveToTrashEvent.php',
        'OCA\\Files_Trashbin\\Exceptions\\CopyRecursiveException' => __DIR__ . '/..' . '/../lib/Exceptions/CopyRecursiveException.php',
        'OCA\\Files_Trashbin\\Expiration' => __DIR__ . '/..' . '/../lib/Expiration.php',
        'OCA\\Files_Trashbin\\Helper' => __DIR__ . '/..' . '/../lib/Helper.php',
        'OCA\\Files_Trashbin\\Listener\\EventListener' => __DIR__ . '/..' . '/../lib/Listener/EventListener.php',
        'OCA\\Files_Trashbin\\Migration\\Version1010Date20200630192639' => __DIR__ . '/..' . '/../lib/Migration/Version1010Date20200630192639.php',
        'OCA\\Files_Trashbin\\Sabre\\AbstractTrash' => __DIR__ . '/..' . '/../lib/Sabre/AbstractTrash.php',
        'OCA\\Files_Trashbin\\Sabre\\AbstractTrashFile' => __DIR__ . '/..' . '/../lib/Sabre/AbstractTrashFile.php',
        'OCA\\Files_Trashbin\\Sabre\\AbstractTrashFolder' => __DIR__ . '/..' . '/../lib/Sabre/AbstractTrashFolder.php',
        'OCA\\Files_Trashbin\\Sabre\\ITrash' => __DIR__ . '/..' . '/../lib/Sabre/ITrash.php',
        'OCA\\Files_Trashbin\\Sabre\\PropfindPlugin' => __DIR__ . '/..' . '/../lib/Sabre/PropfindPlugin.php',
        'OCA\\Files_Trashbin\\Sabre\\RestoreFolder' => __DIR__ . '/..' . '/../lib/Sabre/RestoreFolder.php',
        'OCA\\Files_Trashbin\\Sabre\\RootCollection' => __DIR__ . '/..' . '/../lib/Sabre/RootCollection.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashFile' => __DIR__ . '/..' . '/../lib/Sabre/TrashFile.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashFolder' => __DIR__ . '/..' . '/../lib/Sabre/TrashFolder.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashFolderFile' => __DIR__ . '/..' . '/../lib/Sabre/TrashFolderFile.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashFolderFolder' => __DIR__ . '/..' . '/../lib/Sabre/TrashFolderFolder.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashHome' => __DIR__ . '/..' . '/../lib/Sabre/TrashHome.php',
        'OCA\\Files_Trashbin\\Sabre\\TrashRoot' => __DIR__ . '/..' . '/../lib/Sabre/TrashRoot.php',
        'OCA\\Files_Trashbin\\Storage' => __DIR__ . '/..' . '/../lib/Storage.php',
        'OCA\\Files_Trashbin\\Trash\\BackendNotFoundException' => __DIR__ . '/..' . '/../lib/Trash/BackendNotFoundException.php',
        'OCA\\Files_Trashbin\\Trash\\ITrashBackend' => __DIR__ . '/..' . '/../lib/Trash/ITrashBackend.php',
        'OCA\\Files_Trashbin\\Trash\\ITrashItem' => __DIR__ . '/..' . '/../lib/Trash/ITrashItem.php',
        'OCA\\Files_Trashbin\\Trash\\ITrashManager' => __DIR__ . '/..' . '/../lib/Trash/ITrashManager.php',
        'OCA\\Files_Trashbin\\Trash\\LegacyTrashBackend' => __DIR__ . '/..' . '/../lib/Trash/LegacyTrashBackend.php',
        'OCA\\Files_Trashbin\\Trash\\TrashItem' => __DIR__ . '/..' . '/../lib/Trash/TrashItem.php',
        'OCA\\Files_Trashbin\\Trash\\TrashManager' => __DIR__ . '/..' . '/../lib/Trash/TrashManager.php',
        'OCA\\Files_Trashbin\\Trashbin' => __DIR__ . '/..' . '/../lib/Trashbin.php',
        'OCA\\Files_Trashbin\\UserMigration\\TrashbinMigrator' => __DIR__ . '/..' . '/../lib/UserMigration/TrashbinMigrator.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitFiles_Trashbin::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitFiles_Trashbin::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitFiles_Trashbin::$classMap;

        }, null, ClassLoader::class);
    }
}
