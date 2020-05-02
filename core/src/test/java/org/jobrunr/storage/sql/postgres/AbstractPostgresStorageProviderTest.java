package org.jobrunr.storage.sql.postgres;

import org.jobrunr.storage.sql.SqlStorageProviderTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.extension.AfterAllSubclasses;
import org.junit.jupiter.extension.BeforeAllSubclasses;
import org.junit.jupiter.extension.ForAllSubclassesExtension;
import org.testcontainers.containers.PostgreSQLContainer;

@ExtendWith(ForAllSubclassesExtension.class)
public abstract class AbstractPostgresStorageProviderTest extends SqlStorageProviderTest {

    protected static PostgreSQLContainer sqlContainer = new PostgreSQLContainer<>();

    @BeforeAllSubclasses
    public static void startSqlContainer() {
        sqlContainer.start();
    }

    @AfterAllSubclasses
    public static void stopSqlContainer() {
        sqlContainer.stop();
    }
}
