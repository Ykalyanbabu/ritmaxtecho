CREATE TABLE [dbo].[UserRoles]
(
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [UserId]    INT           NOT NULL,
    [RoleId]    INT           NOT NULL,
    [CreatedAt] DATETIME2 (7) NOT NULL CONSTRAINT [DF_UserRoles_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt] DATETIME2 (7) NULL,
    [IsDeleted] BIT           NOT NULL CONSTRAINT [DF_UserRoles_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_UserRoles_Users] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]),
    CONSTRAINT [FK_UserRoles_Roles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[Roles] ([Id]),
    CONSTRAINT [UQ_UserRoles_UserId_RoleId] UNIQUE ([UserId], [RoleId])
);
